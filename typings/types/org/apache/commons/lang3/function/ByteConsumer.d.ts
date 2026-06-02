import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ByteConsumer extends Object{
    accept(arg0: number): void;
    andThen(arg0: (param0: number) => void): (param0: number) => void;
}