// useTodoViewModel.ts
import { useEffect, useState } from 'react';
import { HomeViewModel } from './HomeViewModel';

//SE CREA UN ELEMENTO HOOK DEL VIEWMODEL PARA ESCUCHAR LOS CAMBIOS
export const useHomeViewModel = (viewModel: HomeViewModel) => {
    const [items, setItems] = useState<{ id: number; nombre: string; color: string; mh: string; }[]>(viewModel.getItems());
    useEffect(() => {
        // Nos suscribimos a los cambios del ViewModel
        const unsubscribe = viewModel.subscribe(() => {
            setItems(viewModel.getItems());
        });
        // Al desmontar el componente, nos desuscribimos
        return () => unsubscribe();
    }, [viewModel]);

    const gato_seleccionado = useState<{ id: number; nombre: string; color: string; mh: string; }>(viewModel.getGatoseleccionado());


    return {
        items,
        gato_seleccionado,
        seleccionarGato: (id: number) => viewModel.seleccionarGato(id)
        //addItem: (newItem: string) => viewModel.addItem(newItem),
        //removeItem: (index: number) => viewModel.removeItem(index)
    };
};