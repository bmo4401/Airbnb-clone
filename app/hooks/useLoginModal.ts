import { create } from 'zustand';
/* dispatch action */
interface useLoginModal {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
}

const useLoginModal = create<useLoginModal>((set) => ({
   isOpen: false,
   onOpen: () => set({ isOpen: true }),
   onClose: () => set({ isOpen: false }),
}));

export default useLoginModal;
