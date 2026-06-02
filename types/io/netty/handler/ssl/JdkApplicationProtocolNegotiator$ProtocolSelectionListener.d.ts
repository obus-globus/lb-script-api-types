import type { Object } from '../../../../java/lang/Object.d.ts'
export interface JdkApplicationProtocolNegotiator$ProtocolSelectionListener extends Object{
    selected(arg0: string): void;
    unsupported(): void;
}