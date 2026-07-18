import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ClassLoading$ArbitraryClassLoadingScope } from '../../../../org/graalvm/nativeimage/impl/ClassLoading$ArbitraryClassLoadingScope.d.ts'
export class ClassLoading extends Object {
    static allowArbitraryClassLoading(): ClassLoading$ArbitraryClassLoadingScope;
    static isSupported(): boolean;
    private constructor()
}