import type { Object } from '../../../java/lang/Object.d.ts'
import type { IMarkerFactory } from '../../../org/slf4j/IMarkerFactory.d.ts'
export interface MarkerFactoryBinder extends Object{
    getMarkerFactory(): IMarkerFactory;
    getMarkerFactoryClassStr(): string;
}