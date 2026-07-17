import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DisposeCapability$DisposableResource extends Object {
    private constructor(resourceValue: Object, asyncDispose: boolean, disposeMethod: Object, disposeArgument: Object)
    readonly asyncDispose: boolean;
    readonly disposeArgument: Object;
    readonly disposeMethod: Object;
    readonly resourceValue: Object;
    getDisposeArgument(): Object;
    getDisposeMethod(): Object;
    getResourceValue(): Object;
    hasDisposeArgument(): boolean;
    isAsyncDispose(): boolean;
}