import type { Object } from '../../../../java/lang/Object.d.ts'
export class InstrumentInfo extends Object {
    constructor(vmObject: Object, id: string, name: string, version: string)
    readonly id: string;
    readonly name: string;
    // private polyglotInstrument: Object;
    readonly version: string;
    getId(): string;
    getName(): string;
    getPolyglotInstrument(): Object;
    getVersion(): string;
    toString(): string;
}