import { create} from "zustand";

const useUIState = create((set)=>({
    homeCategory:"",
    headerImageSrc:"https://images.unsplash.com/photo-1487956382158-bb926046304a",
    setHomeCategory:(value) => set({ homeCategory: value}),
    setHeaderImageSrc:(src) => set({ headerImageSrc: src}),

}))

export default useUIState