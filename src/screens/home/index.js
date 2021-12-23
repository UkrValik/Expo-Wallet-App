import React from 'react';
import { StyleSheet, View, SafeAreaView, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';

import colors from '../../../assets/colors.json';
import BankCard from './BankCard';
import AddWalletButton from './AddWalletButton';
import AllWalletsPieChart from '../../components/AllWalletsPieChart';
import AddTransactionButton from './AddTransactionButton';

const SCREEN_WIDTH = Dimensions.get('screen').width;
const wallets = [
    {
        key:1,
        name: '1234 5678 9101 1121',
        cardNumber: '1234 5678 9101 1121',
        color: '#222',
        balance: 100,
        legendFontColor: '#222',
        legendFontSize: 12,
    },
    {
        key: 2,
        name: '3141 5161 7181 9202',
        cardNumber: '3141 5161 7181 9202',
        color: '#333',
        balance: 160,
        legendFontColor: '#333',
        legendFontSize: 12,
    },
    {
        key: 3,
        name: '1222 3242 5262 7282',
        cardNumber: '1222 3242 5262 7282',
        color: '#444',
        balance: 40,
        legendFontColor: '#444',
        legendFontSize: 12,
    },
    {
        key: 4,
        name: '9303 1323 3343 5363',
        cardNumber: '9303 1323 3343 5363',
        color: '#555',
        balance: 90,
        legendFontColor: '#555',
        legendFontSize: 12,
    },
    {
        key: 5,
        name: '7383 9404 1424 3444',
        cardNumber: '7383 9404 1424 3444',
        color: '#666',
        balance: 150,
        legendFontColor: '#666',
        legendFontSize: 12,
    },
    {
        key: 6,
        name: '5464 7484 9505 1525',
        cardNumber: '5464 7484 9505 1525',
        color: '#777',
        balance: 120,
        legendFontColor: '#777',
        legendFontSize: 12,
    },
    {
        key: 7,
        name: '3545 5565 7585 9606',
        cardNumber: '3545 5565 7585 9606',
        color: '#888',
        balance: 105,
        legendFontColor: '#888',
        legendFontSize: 12,
    },
    // {
    //     key: 8,
    //     cardNumber: '1626 3646 5666 7686',
    //     color: '#999',
    //     balance: 100,
    //     legendFontColor: '#999',
    //     legendFontSize: 12,
    // },
];

const Home = (props) => {

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
    
    const renderCarousel = ({item, index}) => (
        <View style={styles.unvisibleCardArea}>
            {item.map(pair => (
                    <View key={pair[0]?.key || pair.length} style={styles.cardPair}>
                        {pair.length === 2 &&
                            <>
                                <BankCard wallet={pair[0]} />
                                <BankCard wallet={pair[1]} />
                            </>
                        }
                        {pair.length === 1 &&
                            <>
                                <BankCard wallet={pair[0]} />
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
