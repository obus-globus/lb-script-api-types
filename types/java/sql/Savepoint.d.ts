import type { Object } from '../../java/lang/Object.d.ts'
export interface Savepoint extends Object{
    getSavepointId(): number;
    getSavepointName(): string;
}