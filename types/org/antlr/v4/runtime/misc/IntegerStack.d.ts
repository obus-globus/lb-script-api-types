import type { IntegerList } from '../../../../../org/antlr/v4/runtime/misc/IntegerList.d.ts'
export class IntegerStack extends IntegerList {
    constructor()
    constructor(arg0: number)
    constructor(arg0: IntegerStack)
    peek(): number;
    pop(): number;
    push(arg0: number): void;
}