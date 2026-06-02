import type { Object } from '../../../java/lang/Object.d.ts'
export interface InteractionResult extends Object{
    consumesAction(): boolean;
}