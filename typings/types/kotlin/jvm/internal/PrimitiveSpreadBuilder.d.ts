import type { Object } from '../../../java/lang/Object.d.ts'
export abstract class PrimitiveSpreadBuilder<T extends Object | number | string | boolean> extends Object {
    constructor(size: number)
    // private position: number;
    // private /*not mapped: */ getPosition(): number;
    // private size: number;
    // private spreads: (T | null)[];
    addSpread(spreadArgument: T): void;
    protected size(): number;
    protected toArray(values: T, result: T): T;
}