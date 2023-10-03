import useEthereumTransactions from "hooks/useRecentTxns";
import React from "react";
import { ActivityIndicator, FlatList } from "react-native";
import { Transaction } from "types/common";
import TxnCard from "./TxnCard";
import ErrorMessage from "./UI/ErrorMessage";

const TXN_CARD_HEIGHT = 43;

const RecentTxns = () => {
  const { transactions, error, loading } = useEthereumTransactions();
  if (error) {
    <ErrorMessage message="Failed to load txns" />;
  }
  if (loading) {
    return <ActivityIndicator size={"small"} />;
  }
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
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    );
  }
};

export default RecentTxns;
