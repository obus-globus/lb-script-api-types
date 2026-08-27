import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BundleStateTracker extends Object {
    constructor()
    readonly bundling: boolean;
    isBundling(): boolean;
    toggleBundling(): void;
}