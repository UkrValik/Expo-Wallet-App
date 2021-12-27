import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Carousel from 'react-native-snap-carousel';

import colors from '../../../assets/colors.json';
import BankCard from './BankCard';
import AddWalletButton from './AddWalletButton';
import AllWalletsPieChart from '../../components/AllWalletsPieChart';
import AddTransactionButton from './AddTransactionButton';
import { selectUser } from '../../redux/userSlice';
import { selectUserWallets, getUserWallets } from '../../redux/walletSlice';
import { getAllTransactions } from '../../redux/transactionSlice';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const Home = (props) => {

    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const wallets = useSelector(selectUserWallets);

    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            dispatch(getUserWallets(user.token));
            dispatch(getAllTransactions(user.token));
        });

        return unsubscribe;
    }, [props.navigation]);

    const pairsFromArray = (arr) => {
        return arr.reduce(
            (pairs, item) => {
                if (pairs[pairs.length - 1].length === 1) {
                    pairs[pairs.length - 1].push(item);
                    pairs.push([]);
                } else {
                    pairs[pairs.length - 1].push(item);
                }
                return pairs;
            }, [[]]);
    }

    const getPairPairLength = (pairPair) => {
        return pairPair?.reduce((count, item) => count += item.length, 0);
    }

    const walletPairs = pairsFromArray(wallets);
    const walletPairsPairs = pairsFromArray(walletPairs);
    if (getPairPairLength(walletPairsPairs[walletPairsPairs.length - 2]) < 4) walletPairsPairs.pop();
    
    const onWalletPress = (wallet) => {
        props.navigation.navigate('EditWallet', { wallet });
    }

    const renderCarousel = ({item, index}) => (
        <View style={styles.unvisibleCardArea}>
            {item.map(pair => (
                    <View key={pair[0]?.id || pair.length} style={styles.cardPair}>
                        {pair.length === 2 &&
                            <>
                                <BankCard wallet={pair[0]} onPress={() => onWalletPress(pair[0])} />
                                <BankCard wallet={pair[1]} onPress={() => onWalletPress(pair[1])} />
                            </>
                        }
                        {pair.length === 1 &&
                            <>
                                <BankCard wallet={pair[0]} onPress={() => onWalletPress(pair[0])} />
                                <AddWalletButton navigation={props.navigation} />
                            </>
                        }
                        {
                            pair.length === 0 &&
                            <AddWalletButton navigation={props.navigation} />
                        }
                    </View>
                ))}
        </View>
    );

    return (
        <>    
            <SafeAreaView style={{backgroundColor: colors.background}} />
            <View style={styles.container}>
                <View style={styles.cardArea}>
                    <Carousel 
                        data={walletPairsPairs}
                        renderItem={renderCarousel}
                        sliderWidth={SCREEN_WIDTH - 40}
                        itemWidth={SCREEN_WIDTH - 40}
                        />
                </View>
                <AllWalletsPieChart wallets={wallets} />
                <AddTransactionButton
                    navigation={props.navigation} 
                    enabled={wallets.length > 0}
                    />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        backgroundColor: colors.background,
        justifyContent: 'space-between',
    },
    cardArea: {
        borderRadius: 15,
        borderColor: '#000',
        borderWidth: 5,
        height: SCREEN_WIDTH / 4 * 2 + 20,
        paddingHorizontal: 5,
        paddingVertical: 5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: colors.background,
    },
    unvisibleCardArea: {
        height: SCREEN_WIDTH / 4 * 2,
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: colors.background,
    },
    cardPair: {
        justifyContent: 'space-between',
    }
});

export default Home;
