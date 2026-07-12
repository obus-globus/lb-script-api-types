import type { Object } from '../../../../java/lang/Object.d.ts'
export class RuntimeJNIAccess extends Object {
    static register(paramclasses: Object | null): void;
    static register(...parammethods: (Object | null)[]): void;
    static register(...paramfields: (Object | null)[]): void;
    private constructor()
}