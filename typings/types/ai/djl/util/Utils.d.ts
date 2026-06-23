import type { NDArray } from '../../../ai/djl/ndarray/NDArray.d.ts'
import type { Parameter } from '../../../ai/djl/nn/Parameter.d.ts'
import type { Pair } from '../../../ai/djl/util/Pair.d.ts'
import type { InputStream } from '../../../java/io/InputStream.d.ts'
import type { StringBuilder } from '../../../java/lang/StringBuilder.d.ts'
import type { URL } from '../../../java/net/URL.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
import type { Logger } from '../../../org/slf4j/Logger.d.ts'
export class Utils extends Object {
    static EMPTY_ARRAY: (Object | null)[];
    static checkNDArrayValues(paramarg0: NDArray, paramarg1: Logger, paramarg2: string): void;
    static checkParameterValues(paramarg0: Pair<string, Parameter>[], paramarg1: boolean, paramarg2: Logger): void;
    static contains(paramarg0: Object | null, paramarg1: Object | null): boolean;
    static deleteQuietly(paramarg0: Path[][]): void;
    static getCacheDir(): Path[][];
    static getCurrentEpoch(paramarg0: Path[][], paramarg1: string): number;
    static getEngineCacheDir(): Path[][];
    static getEngineCacheDir(paramarg0: string): Path[][];
    static getEnvOrSystemProperty(paramarg0: string): string;
    static getEnvOrSystemProperty(paramarg0: string, paramarg1: string): string;
    static getNestedModelDir(paramarg0: Path[][]): Path[][];
    static getenv(paramarg0: string): string;
    static getenv(paramarg0: string, paramarg1: string): string;
    static getenv(): { [key: string]: string };
    static hash(paramarg0: string): string;
    static indexOf(paramarg0: Object | null, paramarg1: Object | null): number;
    static isOfflineMode(): boolean;
    static moveQuietly(paramarg0: Path[][], paramarg1: Path[][]): void;
    static openUrl(paramarg0: string): InputStream;
    static openUrl(paramarg0: URL): InputStream;
    static openUrl(paramarg0: URL, paramarg1: { [key: string]: string }): InputStream;
    static pad(paramarg0: StringBuilder, paramarg1: string, paramarg2: number): void;
    static readLines(paramarg0: InputStream): string[];
    static readLines(paramarg0: InputStream, paramarg1: boolean): string[];
    static readLines(paramarg0: Path[][]): string[];
    static readLines(paramarg0: Path[][], paramarg1: boolean): string[];
    static toByteArray(paramarg0: InputStream): number[];
    static toFloatArray(paramarg0: Number[]): number[];
    static toString(paramarg0: InputStream): string;
    private constructor()
}