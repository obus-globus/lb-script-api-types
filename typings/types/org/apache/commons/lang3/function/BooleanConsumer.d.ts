import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface BooleanConsumer extends Object {
    accept(arg0: boolean): void;
    andThen(arg0: (param0: boolean) => void): (param0: boolean) => void;
}