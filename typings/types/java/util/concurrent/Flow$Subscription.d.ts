import type { Object } from '../../../java/lang/Object.d.ts'
export interface Flow$Subscription extends Object{
    cancel(): void;
    request(arg0: number): void;
}