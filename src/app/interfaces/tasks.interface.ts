export interface TaskInterface {
    objectId?: string;  // Automatically assigned by Parse
    user: { __type: string; className: string; objectId: string };  // Pointer<User>: ID of the user who owns the task
    title: string;  // Title of the task (required)
    description?: string;  // Detailed description (optional)
    priority: number;  // Priority level (e.g., 1 = High, 2 = Medium, 3 = Low)
    dueDate?: Date;  // Due date (optional)
    status: 'pending' | 'in-progress' | 'completed';  // Task status
    createdAt?: Date;  // Auto-generated timestamp
    updatedAt?: Date;  // Auto-updated timestamp
}