const CheckoutModal = () => {
  return (
    <div className="fixed w-screen h-screen top-0 left-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
      <div className="bg-black w-3/4 h-3/4">
        <button className="w-[calc(100%-16px)] py-2 bg-white box-border text-black rounded-md">
          Оформить заказ
        </button>
      </div>
    </div>
  );
};

export default CheckoutModal;
