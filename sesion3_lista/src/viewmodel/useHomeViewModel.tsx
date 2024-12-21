// useTodoViewModel.ts
import { useEffect, useState } from 'react';
import { HomeViewModel } from './HomeViewModel';

//SE CREA UN ELEMENTO HOOK DEL VIEWMODEL PARA ESCUCHAR LOS CAMBIOS
export const useHomeViewModel = (viewModel: HomeViewModel) => {
    const [items, setItems] = useState<{ id: number; nombre: string; color: string; mh: string; }[]>(viewModel.getItems());
    const [gato_seleccionado, setgato_seleccionado] = useState<{ id: number; nombre: string; color: string; mh: string; }>(viewModel.getGatoseleccionado());

    useEffect(() => {
        // Nos suscribimos a los cambios del ViewModel
        const unsubscribe = viewModel.subscribe(() => {
            setItems(viewModel.getItems());
            setgato_seleccionado(viewModel.getGatoseleccionado());
        });
        // Al desmontar el componente, nos desuscribimos
        return () => unsubscribe();
    }, [viewModel]);

    


    return {
        items,
        gato_seleccionado,
        seleccionarGato: (id: number) => viewModel.seleccionarGato(id)
        //addItem: (newItem: string) => viewModel.addItem(newItem),
        //removeItem: (index: number) => viewModel.removeItem(index)
    };
};

