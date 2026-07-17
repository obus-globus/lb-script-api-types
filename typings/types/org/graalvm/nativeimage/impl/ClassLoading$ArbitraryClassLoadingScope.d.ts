import type { AutoCloseable } from '../../../../java/lang/AutoCloseable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ClassLoading$ArbitraryClassLoadingScope extends Object implements AutoCloseable {
    private constructor()
    close(): void;
}