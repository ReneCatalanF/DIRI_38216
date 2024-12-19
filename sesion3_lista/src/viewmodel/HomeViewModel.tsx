import { list_cats } from '../model/cats';


export class HomeViewModel {
    private items: { id: number; nombre: string; color: string; } [] = [];
    private subscribers: Array<() => void> = [];
    constructor() {
        // Carga inicial de los ítems
        this.loadItems();
    }

    private async loadItems() {
        this.items = list_cats;
        this.notifyChange();
    }

    public getItems(): { id: number; nombre: string; color: string; }[] {
        return this.items;
    }
    /*public async addItem(newItem: string): Promise<void> {
        if (newItem.trim()) {
            this.items = await list_cats(newItem);
            this.notifyChange();
        }
    }
    public async removeItem(index: number): Promise<void> {
        this.items = await removeItemFromAPI(index);
        this.notifyChange();
    }*/

    // Suscripción a cambios
    public subscribe(callback: () => void): () => void {
        this.subscribers.push(callback);
        return () => {
            this.subscribers = this.subscribers.filter(sub => sub !== callback);
        };
    }
    private notifyChange() {
        this.subscribers.forEach(cb => cb());
    }
}