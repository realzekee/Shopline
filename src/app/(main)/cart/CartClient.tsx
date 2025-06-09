"use client";

import ClientCartDisplay from '@/components/ClientCartDisplay';

const CartClient = () => {
  // The ClientCartDisplay component handles its own cart logic using useCart hook internally.
  // No need to pass props like cart or searchParams from here.
  // The 'q' search param was also not being used.
  return (
    <ClientCartDisplay />
  );
};

export default CartClient;
