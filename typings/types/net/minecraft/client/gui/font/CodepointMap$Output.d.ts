import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CodepointMap$Output<T extends Object | number | string | boolean> extends Object{
    accept(codepoint: number, value: T): void;
}