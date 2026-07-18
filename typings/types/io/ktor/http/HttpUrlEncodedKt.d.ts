import type { Parameters } from '../../../io/ktor/http/Parameters.d.ts'
import type { ParametersBuilder } from '../../../io/ktor/http/ParametersBuilder.d.ts'
import type { Appendable } from '../../../java/lang/Appendable.d.ts'
import type { Charset } from '../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Pair } from '../../../kotlin/Pair.d.ts'
import type { Map$Entry } from '../../../java/util/Map$Entry.d.ts'
export class HttpUrlEncodedKt extends Object {
    static formUrlEncode(self: Parameters): string;
    static formUrlEncode(self: Pair<string, string>[]): string;
    static formUrlEncodeTo(self: Parameters, out: Appendable): void;
    static formUrlEncodeTo(self: ParametersBuilder, out: Appendable): void;
    static formUrlEncodeTo(self: Pair<string, string>[], out: Appendable): void;
    static formUrlEncodeTo(self: Map$Entry<string, string[]>[], out: Appendable): void;
    static parseUrlEncodedParameters(self: string, defaultEncoding: Charset, limit: number): Parameters;
    static parseUrlEncodedParameters(self: string, defaultEncoding: Charset, limit: number, plusIsSpace: boolean): Parameters;
}