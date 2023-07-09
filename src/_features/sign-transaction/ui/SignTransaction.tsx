import { TAbiFunction, TContract } from "@entities/contract";
import { SignTransactionForm } from "./SignTransactionForm";
import { TTransactionParams } from "@shared/lib/tx";
import { useState } from "react";
import { ExecuteTransaction } from "./ExecuteTransaction";

type TProps = {
  contract: TContract;
  abiItem: TAbiFunction;
  args: string[];
};

export const SignTransaction = ({ contract, abiItem, args }: TProps) => {
  const [txParams, setTxParams] = useState<TTransactionParams | null>(null);

  const onSubmit = (values: TTransactionParams) => {
    setTxParams(values);
  };

  return (
    <>
      {txParams ? (
        <ExecuteTransaction tx={txParams} />
      ) : (
        <SignTransactionForm
          contract={contract}
          abiItem={abiItem}
          args={args}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};
