import type { Object } from '../../../../java/lang/Object.d.ts'
export interface TruffleLanguage$ContextLocalFactory<C extends unknown, T extends unknown> extends Object{
    create(context: C): T;
}