import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BackendCreationException$Reason extends Enum<BackendCreationException$Reason> {
    static GLFW_ERROR: BackendCreationException$Reason;
    static OPENGL_MISSING: BackendCreationException$Reason;
    static OTHER: BackendCreationException$Reason;
    static VULKAN_DEVICE_VERSION_TOO_LOW: BackendCreationException$Reason;
    static VULKAN_INSTANCE_CREATION_FAILED: BackendCreationException$Reason;
    static VULKAN_LOADER_MISSING: BackendCreationException$Reason;
    static VULKAN_MISSING_EXTENSION: BackendCreationException$Reason;
    static VULKAN_MISSING_FEATURE: BackendCreationException$Reason;
    static VULKAN_NO_DEVICE: BackendCreationException$Reason;
    static VULKAN_NO_GRAPHICS_QUEUE: BackendCreationException$Reason;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BackendCreationException$Reason;
    static values(): BackendCreationException$Reason[];
    private constructor(key: string)
    // private displayName: string;
    displayName(): string;
    name(): "GLFW_ERROR" | "VULKAN_LOADER_MISSING" | "VULKAN_INSTANCE_CREATION_FAILED" | "VULKAN_NO_DEVICE" | "VULKAN_DEVICE_VERSION_TOO_LOW" | "VULKAN_NO_GRAPHICS_QUEUE" | "VULKAN_MISSING_EXTENSION" | "VULKAN_MISSING_FEATURE" | "OPENGL_MISSING" | "OTHER";
}