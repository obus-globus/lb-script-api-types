import type { Object } from '../../../java/lang/Object.d.ts'
export class Hash extends Object {
    static INSTANCE: Hash;
    combine(...objects: Object[]): number;
}