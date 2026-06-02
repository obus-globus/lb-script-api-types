import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export class ResultField extends Object implements Comparable<ResultField> {
    constructor(name: string, percentage: number, globalPercentage: number, count: number)
    count: number;
    globalPercentage: number;
    name: string;
    percentage: number;
    compareTo(resultField: ResultField): number;
    getColor(): number;
}