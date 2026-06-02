import type { AbstractStreamBuilder } from '../../../../../org/apache/commons/io/build/AbstractStreamBuilder.d.ts'
import type { UnsynchronizedByteArrayInputStream } from '../../../../../org/apache/commons/io/input/UnsynchronizedByteArrayInputStream.d.ts'
export class UnsynchronizedByteArrayInputStream$Builder extends AbstractStreamBuilder<UnsynchronizedByteArrayInputStream, UnsynchronizedByteArrayInputStream$Builder> {
    constructor()
    // private length: number;
    // private offset: number;
    // private checkOriginByteArray(): number[];
    get(): UnsynchronizedByteArrayInputStream;
    setByteArray(arg0: number[]): UnsynchronizedByteArrayInputStream$Builder;
    setLength(arg0: number): UnsynchronizedByteArrayInputStream$Builder;
    setOffset(arg0: number): UnsynchronizedByteArrayInputStream$Builder;
}