import { User } from "../models/userModel.js";
import { Project } from "../models/projectModel.js";
import { ProjectMember } from "../models/projectMemberModel.js";
import { ApiResponse } from "../utils/api-response.js";
import { ApiError } from "../utils/api-error.js";
import { asyncHandler } from "../utils/async-handler.js";

const getProjects = asyncHandler(async (requestAnimationFrame, res) => {
    //test
});

const addMemberToProjects = asyncHandler(async (requestAnimationFrame, res) => {
    //test
});

const getProjectById = asyncHandler(async (req, res) => {
    //test
});

const createProject = asyncHandler(async (req, res) => {
    //test
});

const updateProject = asyncHandler(async (req, res) => {
    //test
});

const deleteProject = asyncHandler(async (req, res) => {
    //test
});

const getProjectMembers = asyncHandler(async (req, res) => {
    //test
});

const updateMemberRole = asyncHandler(async (req, res) => {
    //test
});

const deleteMember = asyncHandler(async (req, res) => {
    //test
});

export {
    getProjects,
    addMemberToProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject,
    getProjectMembers,
    updateMemberRole,
    deleteMember
}