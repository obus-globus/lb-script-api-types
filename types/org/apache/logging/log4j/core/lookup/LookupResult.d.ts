import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface LookupResult extends Object{
    isLookupEvaluationAllowedInValue(): boolean;
    value(): string;
}