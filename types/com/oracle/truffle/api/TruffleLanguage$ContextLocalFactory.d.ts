import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleLanguage$ContextLocalFactory<C extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object{
    create(context: C): T;
}