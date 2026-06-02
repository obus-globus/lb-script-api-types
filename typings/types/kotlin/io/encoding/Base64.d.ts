import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../java/lang/CharSequence.d.ts'
import type { Base64$Default } from '../../../kotlin/io/encoding/Base64$Default.d.ts'
import type { Base64$PaddingOption } from '../../../kotlin/io/encoding/Base64$PaddingOption.d.ts'
export class Base64 extends Object {
    static Default: Base64$Default;
    static bytesPerGroup: number;
    static padSymbol: number;
    static symbolsPerGroup: number;
    private constructor(isUrlSafe: boolean, isMimeScheme: boolean, mimeLineLength: number, paddingOption: Base64$PaddingOption)
    // private isMimeScheme: boolean;
    /*not mapped: */ isMimeScheme$kotlin_stdlib(): boolean;
    // private isUrlSafe: boolean;
    /*not mapped: */ isUrlSafe$kotlin_stdlib(): boolean;
    // private mimeGroupsPerLine: number;
    // private mimeLineLength: number;
    /*not mapped: */ getMimeLineLength$kotlin_stdlib(): number;
    // private paddingOption: Base64$PaddingOption;
    /*not mapped: */ getPaddingOption$kotlin_stdlib(): Base64$PaddingOption;
    bytesToStringImpl(source: number[]): string;
    charsToBytesImpl(source: CharSequence, startIndex: number, endIndex: number): number[];
    // private checkDestinationBounds(destinationSize: number, destinationOffset: number, capacityNeeded: number): void;
    // private checkPaddingIsAllowed(padIndex: number): void;
    checkSourceBounds(sourceSize: number, startIndex: number, endIndex: number): void;
    decode(source: number[], startIndex: number, endIndex: number): number[];
    decode(source: CharSequence, startIndex: number, endIndex: number): number[];
    // private decodeImpl(source: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
    decodeIntoByteArray(source: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
    decodeIntoByteArray(source: CharSequence, destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
    decodeSize(source: number[], startIndex: number, endIndex: number): number;
    encode(source: number[], startIndex: number, endIndex: number): string;
    encodeIntoByteArray(source: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
    encodeIntoByteArrayImpl(source: number[], destination: number[], destinationOffset: number, startIndex: number, endIndex: number): number;
    encodeSize(sourceSize: number): number;
    encodeToAppendable<A extends Appendable>(source: number[], destination: A, startIndex: number, endIndex: number): A;
    encodeToByteArray(source: number[], startIndex: number, endIndex: number): number[];
    encodeToByteArrayImpl(source: number[], startIndex: number, endIndex: number): number[];
    // private handlePaddingSymbol(source: number[], padIndex: number, endIndex: number, byteStart: number): number;
    // private shouldPadOnEncode(): boolean;
    // private skipIllegalSymbolsIfMime(source: number[], startIndex: number, endIndex: number): number;
    withPadding(option: Base64$PaddingOption): Base64;
}