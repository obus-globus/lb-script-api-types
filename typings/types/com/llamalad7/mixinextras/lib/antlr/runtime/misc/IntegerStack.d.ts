import type { IntegerList } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/IntegerList.d.ts'
export class IntegerStack extends IntegerList {
    constructor()
    peek(): number;
    pop(): number;
    push(arg0: number): void;
}