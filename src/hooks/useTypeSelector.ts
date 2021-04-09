import {useSelector, TypedUseSelectorHook} from 'react-redux';
import {RootState} from '../state';

// to set the state actuall types
export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector;