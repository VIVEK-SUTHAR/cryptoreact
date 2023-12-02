import useEthereumTransactions from "hooks/useRecentTxns";
import React, { useState } from "react";
import { ActivityIndicator, FlatList, RefreshControl } from "react-native";
import { Transaction } from "types/common";
import TxnCard from "./TxnCard";
import ErrorMessage from "./UI/ErrorMessage";
import { Text } from "theme";

const TXN_CARD_HEIGHT = 43;

const RecentTxns = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const { transactions, error, loading, fetchTransactions } =
    useEthereumTransactions();
  if (error) {
    <ErrorMessage message="Failed to load txns" />;
  }
  if (loading) {
    return <ActivityIndicator size={"small"} />;
  }

  const handleRefresh = async () => {
    try {
      setIsRefreshing(true);
      const controller = new AbortController();

      await fetchTransactions(controller);
    } catch (error) {
    } finally {
      setIsRefreshing(false);
    }
  };

  const getItemLayout = (_: unknown, index: number) => ({
    length: TXN_CARD_HEIGHT,
    offset: TXN_CARD_HEIGHT * index,
    index,
  });
  const renderItem = ({ item }: { item: Transaction }) => {
    return <TxnCard transaction={item} />;
  };

  const keyExtractor = (_: unknown, index: number) => index.toString();

  if (transactions.length === 0) {
    return (
      <ErrorMessage
        message={`${
          error?.message || "Looks like you don't have done any txns yet :("
        } `}
      />
    );
  }
  if (transactions.length > 0) {
    return (
      <FlatList
        data={transactions}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        refreshControl={
          <RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
        }
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<ListHeaderComponent />}
      />
    );
  }
};

const ListHeaderComponent = () => (
  <Text color="primaryCardText" variant="heading">Your recent txns</Text>
);

export default RecentTxns;
