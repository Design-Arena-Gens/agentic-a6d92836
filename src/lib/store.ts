export type StoreTemplate = "????" | "???????" | "????";

export interface StoreData {
  name: string;
  slug: string;
  primaryColor: string;
  industry: string;
  template: StoreTemplate;
  createdAt: string;
}

const STORAGE_KEY = "storeBuilder.current";

export function loadStore(): StoreData | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as StoreData;
  } catch {
    return null;
  }
}

export function saveStore(data: StoreData) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
