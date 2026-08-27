import type { Object } from '../../../java/lang/Object.d.ts'
export class Question extends Object {
    constructor(name: string, type: number, class_: number)
    readonly class: number;
    readonly name: string;
    readonly type: number;
    component1(): string;
    component2(): number;
    component3(): number;
    copy(name: string, type: number, class_: number): Question;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}