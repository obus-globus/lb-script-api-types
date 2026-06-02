import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JdkApplicationProtocolNegotiator$ProtocolSelector extends Object{
    select(arg0: string[]): string;
    unsupported(): void;
}