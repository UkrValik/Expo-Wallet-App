import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const AllWalletsPieChart = (props) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {props.wallets.length > 0 ? 'All wallets pie chart' : ''}
            </Text>
            <PieChart 
                data={props.wallets}
                width={SCREEN_WIDTH}
                height={SCREEN_WIDTH / 2}
                chartConfig={{
                    backgroundColor: '#fff',
                    propsForLabels: {
                        textAnchor: 'start',
                    },
                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                }}
                accessor='balance'
                backgroundColor='transparent'
                />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '700',
    }
});

export default AllWalletsPieChart;
