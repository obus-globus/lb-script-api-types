import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class DFAAbstractNode extends Object {
    constructor(id: number)
    readonly id: number;
    getId(): number;
}