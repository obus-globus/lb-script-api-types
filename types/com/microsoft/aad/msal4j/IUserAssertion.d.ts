import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IUserAssertion extends Object{
    getAssertion(): string;
    getAssertionHash(): string;
}