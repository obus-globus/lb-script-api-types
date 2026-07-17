import type { ClassLoader } from '../../../../java/lang/ClassLoader.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ForeignAccess } from '../../../../org/graalvm/nativeimage/dynamicaccess/ForeignAccess.d.ts'
import type { JNIAccess } from '../../../../org/graalvm/nativeimage/dynamicaccess/JNIAccess.d.ts'
import type { ReflectiveAccess } from '../../../../org/graalvm/nativeimage/dynamicaccess/ReflectiveAccess.d.ts'
import type { ResourceAccess } from '../../../../org/graalvm/nativeimage/dynamicaccess/ResourceAccess.d.ts'
import type { Feature$FeatureAccess } from '../../../../org/graalvm/nativeimage/hosted/Feature$FeatureAccess.d.ts'
export interface Feature$AfterRegistrationAccess extends Object, Feature$FeatureAccess{
    getApplicationClassLoader(): ClassLoader;
    getForeignAccess(): ForeignAccess;
    getJNIAccess(): JNIAccess;
    getReflectiveAccess(): ReflectiveAccess;
    getResourceAccess(): ResourceAccess;
}