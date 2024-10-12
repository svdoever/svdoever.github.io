---
title: XM Cloud Pages - what do translation files tell us
published: true
date: 2024-02-24
spoiler: While diving into the network traffic of the XM Cloud Pages editor, I stumbled onto the English translation file for Pages. Good to see all texts in one overview, it tells something about the features of the product...
description: While diving into the network traffic of the XM Cloud Pages editor, I stumbled onto the English translation file for Pages. Good to see all texts in one overview, it tells something about the features of the product...
image: https://i.ibb.co/X4w6ZdH/image.png
tags: XMCloud, Pages, Translation
canonical_url: https://www.sergevandenoever.nl/XM_Cloud_Pages_what_do_translation_files_tell_us
cover_image: cover image for post, accepts a URL. The best size is 1000 x 420.
series: post series name.
---
The XM Cloud Pages web application retrieves a translation file on startup using the following URL: https://pages.sitecorecloud.io/assets/i18n/en.json?v=12309 (which also works without the version - probably returning the latest version). The cool thing of this file is that it contains all the texts that are used in the application. This is a great way to see what the application is capable of. Below I included a copy of the current version of the file. I never saw Pages in other languages than English, and I tried some different language codes, but only English seems to work At least Pages is prepared to be multi-lingual! And if you have ned-users that don't understand English, you can always use a tool like https://www.tampermonkey.net/ to provide your own translation file:-)

```json
{
    "COMMON": {
        "CANCEL": "Cancel",
        "CLOSE": "Close",
        "CREATE": "Create",
        "CREATE_NEW": "Create new",
        "NEXT": "Next",
        "MENU": "Menu",
        "RENAME": "Rename",
        "DUPLICATE": "Duplicate",
        "REMOVE": "Remove",
        "EDIT": "Edit",
        "DELETE": "Delete",
        "DEFAULT": "Default",
        "SAVE": "Save",
        "CLEAR": "Clear",
        "SEARCH_PLACEHOLDER": "Search",
        "COPY": "copy",
        "COPY_TO_CLIPBOARD": "Copy to clipboard",
        "COPY_SUCCESS": "Copied to clipboard",
        "COPY_ERROR": "Could not copy to clipboard",
        "PREVIOUS_STEP": "Previous step",
        "NAME": "Name",
        "FOLDER": "Folder",
        "SELECT": "Select",
        "SUBMIT": "Submit",
        "OVERWRITE": "Overwrite",
        "LEARN_MORE": "Learn more"
    },
    "EXTENSIONS": {
        "SECTIONS": {
            "DETAILS": "Details",
            "THEME": "Theme"
        }
    },
    "ERRORS": {
        "SESSION_EXPIRED_RELOAD_PAGE": "The session has expired, reload the page",
        "RELOAD_ERROR_ACTION_TITLE": "Reload the page",
        "INVENTORY_API_ERROR_MESSAGE": "There was an issue in getting XM Cloud tenant information. Try again later, or contact your XM Cloud administrator if the issue persists.",
        "OPERATION_GENERIC": "An error prevented the operation from completing",
        "ITEM_NOT_FOUND": "The item has been moved or deleted. Press F5 to refresh your screen.",
        "CONTEXT_COERCED": "The item you requested cannot be displayed. Either the item does not exist or you do not have permission to view it.",
        "CONTEXT_NOT_FOUND": "The page did not load properly. Try refreshing the page. If the error reoccurs, contact your system administrator.",
        "NO_TENANT_AVAILABLE": "The instance you are trying to open is not part of the current organization. Use the App switcher or the XM Cloud portal to change organization and find the correct instance.",
        "DEVICES_BREAKPOINT_API_ERROR_MESSAGE": "There was an issue in getting devices information. Try again later, or contact your XM Cloud administrator if the issue persists."
    },
    "WARNING": {
        "LAYOUT_EDITING_WARNING": "You are editing the shared layout of this page. All the changes you make to the shared layout will be applied to all versions of this page in every language.",
        "NEED_AUTHENTICATE_TO_XM_CLOUD": "You need to authenticate to XM Cloud",
        "GO_TO_XM_CLOUD": "Go to XM Cloud"
    },
    "GENERAL_ERROR": {
        "HEADER": "Error",
        "MESSAGE": "Something went wrong.",
        "LOGOUT": "Log out"
    },
    "NO_ORGANIZATION": {
        "HEADER": "Access denied",
        "MESSAGE": "You don't have permission to access this page",
        "LINK": "Go to {{appName}}",
        "LOGOUT": "Log out"
    },
    "NO_TENANTS": {
        "HEADER": "Access denied",
        "MESSAGE": "The instance you are trying to open is not part of the current organization",
        "LINK": "Go to {{appName}}",
        "LOGOUT": "Switch to a different organization"
    },
    "DEVICE": {
        "PHONE": "Phone",
        "TABLET": "Tablet",
        "DESKTOP": "Desktop"
    },
    "NAV": {
        "MAIN": "Main",
        "WORKSPACE": "Workspace",
        "EDITOR": "Page editor",
        "HELP": "Help",
        "LOGOUT": "Log out",
        "PREVIEW": "Preview",
        "LOADING": "Loading...",
        "UNDO": "Undo",
        "REDO": "Redo",
        "EXPAND": "Expand",
        "COLLAPSE": "Collapse",
        "METADATA": "Metadata",
        "GO_BACK": "Go back",
        "PAGES": "Site pages",
        "COMPONENTS": "Components",
        "PERSONALIZATION": "Personalization",
        "ITEMS": "Items",
        "ANALYTICS": "Analytics",
        "DEFAULT_USERNAME": "Username",
        "APP_BASE_NAME": "XM Apps Dashboard"
    },
    "EDITOR": {
        "ADD_TO_PAGE": "Add to page",
        "CREATE_PAGE": "Create a page",
        "CREATE_SUBPAGE": "Create a subpage",
        "DUPLICATE": "Duplicate",
        "SETTINGS": "Settings",
        "SEO_SETTINGS": "SEO settings",
        "PAGE_DETAILS": "Page details",
        "CREATE_PAGE_INSUFFICIENT_PRIVILEGES": "You do not have permissions to create a page here",
        "DUPLICATE_ITEM_INSUFFICIENT_PRIVILEGES": "You do not have permissions to duplicate item here",
        "CREATE_NEW": "Create new",
        "CREATE_FOLDER": "Create a folder",
        "CREATE_FOLDER_INSUFFICIENT_PRIVILEGES": "You do not have permissions to create a folder here",
        "CREATE_PAGE_ON_SAME_LEVEL": "Create page on same level",
        "ITEM_ALREADY_DEFINED_ON_THIS_LEVEL": "A '{{name}}' item already exists at this level. There cannot be two items with the same name at the same level.",
        "CREATE_ITEM_NOT_VALID_NAME": "'{{name}}' is not a valid name",
        "CREATE_PAGE_FAILED": "The '{{name}}' page cannot be created",
        "CREATE_FOLDER_FAILED": "The '{{name}}' folder cannot be created",
        "CREATE_ITEM_FAILED": "The '{{name}}' item cannot be created",
        "CREATE_PAGE_EMPTY_NAME": "The page name cannot be empty",
        "CREATE_FOLDER_EMPTY_NAME": "The folder name cannot be empty",
        "CREATED_BY": "Created by",
        "DATE_CREATED": "Date created",
        "ITEM_NAME": "Item name",
        "DELETE": "Delete",
        "DETAILS": "Details",
        "OPTIONS": "Options",
        "UNKNOWNSECTION": "Unknown",
        "UNCATEGORISED": "Uncategorised",
        "PLACEHOLDER_DETAILS": "Placeholder details",
        "PLACEHOLDER_KEY": "Placeholder key",
        "ITEM_ID": "Item ID",
        "ITEM_PATH": "Item path",
        "NEW_PAGE": "New page",
        "NEW_FOLDER": "New folder",
        "COPY_OF": "Copy of",
        "NO_INSERT_OPTIONS": "The insert options are not set for the parent item",
        "ALL_PAGES": "All pages",
        "TEMPLATE_PATH": "Template path",
        "COMPONENTS": "Components",
        "NO_SEARCH_RESULTS": "No search results",
        "SEARCH_SUGGESTIONS": "Try a different search query",
        "DEFAULT_COLLECTION": "Default collection",
        "FEAAS": "FEaaS",
        "OPEN_IN_EXPLORER": "Open in Explorer",
        "SITE_EDITING_DISABLE": "Editing in Pages is disabled for this site. Please contact your site administrator",
        "RENDERING_INSERT_FAILED": "An error occurred and the component was not added to the page. Try adding the component again.",
        "RENDERING_MOVE_FAILED": "An error occurred and the component was not moved. Refresh the page and try moving the component again.",
        "DRAG_TO_REARRANGE": "Drag to rearrange",
        "CONTENT_TREE": {
            "TITLE": "Site tree",
            "MOVE_ITEM_ERROR": "There was an error moving the item '{{name}}' in the Content Tree",
            "MOVE_ITEM_INTO_SUCCESS": "You placed {{movedItemName}} into {{targetItemName}}",
            "MOVE_ITEM_BEFORE_SUCCESS": "You placed {{movedItemName}} above {{targetItemName}}",
            "MOVE_ITEM_AFTER_SUCCESS": "You placed {{movedItemName}} below {{targetItemName}}",
            "SEARCH": {
                "EMPTY_QUERY_DESCRIPTION": "Start typing to fetch results",
                "FILTER_ITEM_TYPE": "Item type",
                "FILTER_ALL": "All",
                "FILE_PAGES": "Pages",
                "FILTER_FOLDERS": "Folders",
                "ERROR": "Search does not work. Please contact your Sitecore admin to resolve this issue."
            }
        },
        "SAVE": {
            "PROGRESS": "Saving",
            "COMPLETE": "Saved at {{datetime}}",
            "ERRORS": {
                "ERROR_AFTER_NAV": "There was an error during autosave. Check that all your changes have been saved before you open another page.",
                "ERROR_AFTER_NAV_ACTION": "Go back",
                "BASE_TEMPLATE_WAS_CHANGED": "You are about to remove one or more base templates from the current template.\n\nWhen you remove a base template, Sitecore updates all the items based on the current template and clears any field values in these items that are associated with the fields in the base template that you removed. These field values cannot be restored once you have removed them.\n\nDo you want to proceed?",
                "CHANGED_UNVERSIONED_OR_SHARED_FLAG": "You have changed the unversioned or shared flag.\n\nEnabling either of these flags will initiate a background process\nto update all the items based on this template.\n\nThis process might demand a lot of resources.\n\nIf you have enabled either the unversioned or shared flag, the previous version values of these\nfields will be lost.\n\nAre you sure you want to proceed?",
                "DATASOURCE_MODIFIED_BY_ANOTHER_USER": "The page or associated content has been modified by another user. The changes cannot be saved. Do you want to reload the page and lose your changes?",
                "INCORRECT_CLONE_SOURCE": "The clone source has incorrect value. Please fix '__Source Item' value ('Advanced' section) to continue.",
                "INTERNAL_ERROR": "Internal server error",
                "ITEM_IS_PROTECTED": "You cannot edit the item because it is protected",
                "ITEM_IS_FALLBACK": "You cannot edit the item because it is a fallback version",
                "ITEM_LOCKED_BY_ANOTHER_USER": "Unable to save changes because the corresponding content has been locked by another user",
                "ITEM_SHOULD_BE_LOCKED_BEFORE_EDIT": "Cannot save the item because it has not been locked by the current user",
                "NO_WRITE_ACCESS": "You cannot edit the item because you do not have write access",
                "PAGE_DOES_NOT_EXIST": "The page does not exist. The changes cannot be saved. Do you want to reload the page and lose your changes?",
                "PAGE_VERSION_DOES_NOT_EXIST": "The page version does not exist. The changes cannot be saved. Do you want to reload the page and lose your changes?",
                "PAGE_WAS_MODIFIED": "The item has been modified. The changes cannot be saved. Do you want to overwrite other changes?",
                "PAGE_WAS_MODIFIED_WARNING": "The item has been modified. Reload the item to see the latest changes.",
                "RELOAD_ACTION_TITLE": "Reload",
                "RELOAD_DIALOG_HEADER": "Saving error",
                "VALIDATION_ERROR": "Validation failed",
                "UNABLE_TO_SAVE": "Unable to save"
            },
            "NO_CHANGES": "No changes"
        },
        "CHANGE_DISPLAY_NAME": {
            "BUTTON_TEXT": "Edit the display name",
            "ERRORS": {
                "INSUFFICIENT_PRIVILEGES": "You do not have permissions to change the display name of the page",
                "ITEM_IS_FALLBACK": "You cannot change the display name of this item because it is a fallback version",
                "ITEM_IS_LOCKED": "You cannot change the display name of this item because the item is locked by another user"
            }
        },
        "RENDERING": {
            "RENDERING": "Component",
            "PERSONALIZATION": "Personalization",
            "RESET": "Reset",
            "DATASOURCE": "Content item",
            "NO_DATASOURCE": "Enter content item path",
            "BROWSE_DATASOURCE": "Browse",
            "ASSIGN_PERSONALIZED_DATASOURCE": "Assign item",
            "REQUIRES_DATASOURCE": "This component requires datasource to be chosen",
            "OPEN_COMPONENTS": "Open Components",
            "TO_BE_PUBLISHED": "To be published",
            "HIDE_RENDERING": "Hide component",
            "DELETE_RENDERING": "Delete component",
            "DELETE_RENDERING_DESCRIPTION": "This component is used in \"{{rulesCount}}\" page variants. If you delete the component, it will also be deleted from those page variants. Are you sure you want to delete the \"{{displayName}}\" component?",
            "RENDERING_LIST": {
                "EMPTY_RENDERING_NO_COMPATIBLE": "No compatible components",
                "EMPTY_RENDERING_DESCRIPTION_NO_COMPATIBLE": "There are no compatible components available for the selected component",
                "EMPTY_RENDERING_NO_ALLOWED": "No allowed components",
                "EMPTY_RENDERING_DESCRIPTION_NO_ALLOWED": "There are no allowed components available for the selected component"
            },
            "COMPONENTS_FILTER": "*Data source filter only applies to Sitecore Components",
            "EXTERNAL_DATASOURCES": "External",
            "XMCLOUD_DATASOURCES": "XM Cloud",
            "DATA_SOURCE": "Data source"
        },
        "IMAGE": {
            "ADD": "Add",
            "ADD_AN_IMAGE": "Add an image",
            "ADD_SELECTED": "Add selected",
            "CHANGE": "Change",
            "PATH": "Image path",
            "PATH_PLACEHOLDER": "Specify the path to the image",
            "NOT_FOUND": "The image does not exist",
            "NOT_A_MEDIA": "The item is not an image",
            "INVALID_SOURCES": "The source of this field is not valid. Contact your site administrator."
        },
        "LINK": {
            "LINK_TYPE": "Link type",
            "TYPE": {
                "EXTERNAL": "External",
                "INTERNAL": "Internal",
                "MEDIA": "Media"
            },
            "OPTIONAL_LABEL": "Optional parameters",
            "ALT_TEXT": "Link title",
            "TEXT": "Link text",
            "TEXT_PLACEHOLDER": "Enter link text",
            "ALT_TEXT_PLACEHOLDER": "Enter link title",
            "CREATE_OR_EDIT_LINK": "Create or edit hyperlink",
            "OPEN_NEW_WINDOW": "Open in new window",
            "TARGET": "Target",
            "CLASS": "CSS class",
            "CLASS_PLACEHOLDER": "Enter CSS class",
            "PATH": "Path",
            "PATH_PLACEHOLDER": "Enter path",
            "URL": "URL",
            "URL_PLACEHOLDER": "Enter URL",
            "BROWSE_ITEM_PATH": "Browse",
            "ITEM_PATH_PLACEHOLDER": "Enter content item path",
            "QUERY_STRING": "URL query string",
            "QUERY_STRING_PLACEHOLDER": "Enter URL query string",
            "ANCHOR": "Anchor",
            "ANCHOR_PLACEHOLDER": "Enter anchor",
            "DIALOG": {
                "INTERNAL_LINK": "Internal link",
                "ADD_SELECTED": "Add link"
            }
        },
        "NUMBER": {
            "VALUE_PLACEHOLDER": "Enter number value",
            "NOT_VALID_NUMBER": "The entered value is not a valid number",
            "NOT_VALID_VALUE_WAS_NOT_SAVED": "The value entered is not a valid number and was not saved"
        },
        "INTEGER": {
            "VALUE_PLACEHOLDER": "Enter integer value",
            "NOT_VALID_INTEGER": "The entered value is not a valid integer",
            "NOT_VALID_VALUE_WAS_NOT_SAVED": "The value entered is not a valid integer and was not saved"
        },
        "RTE": {
            "ALIGN": {
                "CENTER": "Align center",
                "JUSTIFY": "Justify",
                "LEFT": "Align left",
                "RIGHT": "Align right"
            },
            "FORMAT": {
                "BOLD": "Bold",
                "ITALIC": "Italic",
                "STRIKETHROUGH": "Strikethrough",
                "UNDERLINE": "Underline"
            },
            "HEADER": {
                "NORMAL": "Normal",
                "PREFIX": "Header"
            },
            "INDENT": {
                "DECREASE": "Decrease indent",
                "INCREASE": "Increase indent"
            },
            "LINK": {
                "ALT_TEXT": "Link title",
                "ALT_TEXT_PLACEHOLDER": "Enter link title",
                "HEADER": "Link details",
                "CREATE_OR_EDIT_LINK": "Create or edit hyperlink",
                "NEW_TAB": "New tab/window",
                "REMOVE_LINK": "Remove link",
                "SAME_TAB": "Same tab",
                "TARGET": "Target",
                "PATH": "Path",
                "PATH_PLACEHOLDER": "Enter URL",
                "TEST_URL": "Test url"
            },
            "LIST": {
                "BULLET": "Bullet list",
                "NUMBERED": "Numbered list"
            },
            "MEDIA": {
                "INSERT": "Insert media"
            },
            "REMOVE_FORMATTING": "Remove formatting"
        },
        "WORKFLOW": {
            "ACTION": "Action",
            "ACTIONS": "Actions",
            "ACTION_TAKEN": "Action taken",
            "CHANGED_BY": "Changed by",
            "COMMENT": "Comment",
            "CURRENT_STATUS": "Current state",
            "ENTER_A_COMMENT": "Enter a comment",
            "LATEST_WORKFLOW_CHANGE": "Latest workflow change",
            "NO_WORKFLOW": "No workflow",
            "NO_ACCESS_RIGHTS_TO_PUBLISH": "You do not have permissions to publish this page",
            "PUBLISHABLE_SETTING_DISABLED": "You cannot publish this page because the Publishable setting is disabled",
            "PUBLISHING_RESTRICTIONS": "This page has publishing restrictions that prevent you from publishing it now",
            "PUBLISH_PAGE": "Publish page",
            "PUBLISH_PAGE_WITH_SUBPAGES": "Publish page with all subpages",
            "PUBLISH_FAILED": "Publishing failed. Try again. If the error reoccurs, contact your system administrator.",
            "PUBLISH_SUCCESSFUL": "The \"{{itemName}}\" page was published successfully",
            "PUBLISH_WITH_SUBITEMS_SUCCESSFUL": "The \"{{itemName}}\" page was published with subpages. Pages processed: {{processedItemsCount}}.",
            "PUBLISH": "Publish",
            "PUBLISHING": "Publishing...",
            "UPDATING_WORKFLOW_STATE": "Updating workflow state...",
            "UPDATING": "Updating...",
            "WORKFLOW": "Workflow",
            "WORKFLOW_STEP": "Workflow state",
            "WARNINGS": {
                "DATASOURCE_LOCKED_BY_ANOTHER_USER": "Another user has locked the item or associated content item",
                "ITEM_LOCKED_BY_ANOTHER_USER": "Your changes cannot be saved because another user has locked the content item",
                "NO_WRITE_ACCESS": "You cannot edit the item because you do not have write access",
                "NO_WORKFLOW_WRITE_ACCESS": "You do not have permissions to update this item to the next workflow state",
                "UNKNOWN_SERVER_ERROR": "Server returned an unkown error",
                "THE_PAGE_WAS_NOT_MOVED_TO_THE_NEW_WORKFLOW_STATE": "The page was not moved to the new workflow state.",
                "DATA_SOURCE_ITEM_ERROR": "Data source item error",
                "ERROR": "Error."
            },
            "NOT_PUBLISHABLE_VERSION_WARNING_TEXT": "Publishing settings for the selected page prohibit you from publishing now",
            "NOT_PUBLISHABLE_INFO_TEXT_ONE": "The current version is not the latest publishable version of the page.",
            "NOT_PUBLISHABLE_INFO_TEXT_TWO": "If you click Publish, <strong>Version {{ versionName }}</strong> will be published.",
            "NOT_LATEST_PUBLISHABLE": "The current version is not the latest publishable version of the page. Select <strong>Version {{ version }} - {{ versionName }}</strong> to publish the page."
        },
        "ITEMS_BROWSER": {
            "HEADER_TEXT": "Assign content item",
            "ASSIGN": "Assign",
            "CONTENT_ITEMS": "Content items",
            "SELECT_TEMPLATE_TITLE": "Select the template for the new content item",
            "NEW_CONTENT_ITEM": "New content item",
            "CONTEXT_MENU": {
                "BUTTON_LABEL": "Context menu",
                "CREATE_NEW": "Create new"
            }
        },
        "WORKSPACE_EMPTY": {
            "HEADER": "The page cannot be displayed",
            "DESCRIPTION": "The component host for your website has not been configured. Contact your system administrator for help."
        },
        "DELETE_ITEM": {
            "DIALOG_HEADER": "Delete item",
            "PROMPT_CONFIRM_DELETE": "Are you sure you want to delete \"{{itemText}}\"?",
            "PROMPT_CONFIRM_DELETE_WITH_CHILDREN": "Are you sure you want to delete \"{{itemText}}\"? This page has sub-pages which will also be deleted if you delete this page.",
            "START_ITEM": "This page is a start item for site and cannot be deleted",
            "ERROR": "Error while deleting item",
            "ERRORS": {
                "DELETE_FAIL": "Error while deleting item",
                "INSUFFICIENT_PRIVILEGES": "You do not have permissions to change the display name of the page",
                "ITEM_IS_LOCKED": "You cannot change the display name of this item because the item is locked by another user"
            }
        },
        "RHS_DEFAULT_TEXT": "Select an element in the canvas to view more options."
    },
    "MEDIA": {
        "MEDIA_LIBRARY": "Media Library",
        "CONTENT_HUB": "Content hub",
        "FILE_NAME": "File name",
        "FILE_TYPE": "File type",
        "FILE_SIZE": "File size",
        "DIMENSIONS": "Dimensions",
        "PATH": "Path",
        "ALT_TEXT": "Alternative text",
        "DETAILS_EMPTY": "Select a file to preview it.",
        "EMPTY_FOLDER": "No media files in this folder.",
        "NO_SEARCH_RESULTS": "No results match your search phrase.<br />Try again.",
        "LIMIT_REACHED": "We are showing {{limit}} images for optimal performance. There are more images available, please narrow down your search or select a different folder.",
        "ERRORS": {
            "NOT_FOUND": "The path is not valid",
            "SOURCE_NOT_FOUND": "The source of this field is not valid. Contact your site administrator.",
            "GENERIC": "Something happened. Reload the dialog to try again."
        },
        "UPLOAD": {
            "FILES": "Upload media",
            "MEDIA_FILES": "{{count}} Media files",
            "SUCCESS": "Successfully uploaded image '{{fileName}}.{{extension}}",
            "FAILED": "Something went wrong while uploading the file. Please try again later.",
            "UNSUPPORTED_FILE_TYPE": "The selected file type is not supported",
            "MAX_FILE_SIZE": "The file size exceeds the given limit",
            "FILE_NAME_EXIST": "The file with the given name already exist",
            "INSUFFICIENT_PRIVILEGES": "You do not have permission to upload file",
            "DESTINATION_FOLDER_NOT_FOUND": "Destination folder not found",
            "INVALID_FILE": "The file is not a valid image file",
            "SVG_SCRIPTS_NOT_ALLOWED": "can't be uploaded. Contact your system administrator to enable uploading SVGs with JavaScript code. ",
            "REOPEN_DIALOG_INFO": "The item is indexing. Try refreshing this page until it appears.",
            "REFRESH": "Refresh"
        }
    },
    "SITE_LANGUAGE": {
        "NO_SITES": "No sites",
        "NO_LANGUAGES": "No languages",
        "CONTEXT_LANGUAGE": "Context language",
        "CONTEXT_SITE": "Context site",
        "LANGUAGE_SWITCHER": "Language switcher",
        "SITE_SWITCHER": "Site switcher",
        "SHARED_LAYOUT": "Shared layout",
        "SHARED_LAYOUT_DESCRIPTION": "Enabling shared layout applies changes to all language versions of a page, while turning it off applies changes only to the specific version.",
        "SHARED": "Shared"
    },
    "TENANT": {
        "TENANT_SWITCHER": "CM instances switcher",
        "NO_TENANTS": "No tenants"
    },
    "VERSIONS": {
        "HEADER": "Versions",
        "VERSION": "Version",
        "NAME": "Name",
        "UNNAMED": "Unnamed",
        "LAST_MODIFIED_BY": "Last modified by",
        "DATE_LAST_MODIFIED": "Date last modified",
        "PUBLISH_DATE": "Publish date",
        "NO_DATE": "No date",
        "NO_START_DATE": "No start date",
        "NO_END_DATE": "No end date",
        "VERSION_NOT_EXIST": "The version you selected does not exist",
        "CREATE_NEW_VERSION": "Create a new version",
        "VERSION_CREATED_SUCCESSFUL": "Version {{ versionNumber }} for \"{{ itemDisplayName }}\" was automatically created",
        "LIST": {
            "HEADER": "Overview",
            "VERSIONS": "Versions",
            "CREATE": "Create new",
            "COMPONENT_DETAILS_HEADER": "Staged versions"
        },
        "CREATE": {
            "HEADER": "Create version",
            "NAME": "Version name",
            "NAME_PLACEHOLDER": "Enter version name",
            "OPTIONAL": "Optional",
            "WORKFLOW": "Assigned workflow state",
            "DRAFT": "Draft",
            "ERROR": "There was an error creating a new version"
        },
        "RENAME": {
            "HEADER": "Rename version",
            "NAME": "Version name",
            "NAME_PLACEHOLDER": "Enter version name",
            "OPTIONAL": "Optional",
            "WORKFLOW": "Assigned workflow state",
            "DRAFT": "Draft",
            "ERROR": "There was an error renaming a version"
        },
        "PUBLISHING": {
            "MENU_LABEL": "Schedule publishing availability",
            "HEADER": "Set publishing dates",
            "START_DATE": "Start date",
            "END_DATE": "End date",
            "TIMEZONE": "Timezone",
            "ERROR": "There was an error setting publishig dates",
            "AVAILABLE": "Available",
            "AVAILABLE_DESCRIPTION": "Specify when this version can be published. Use this option when you want this version to be available for publishing during a specified time frame.",
            "NOT_AVAILABLE": "Not available",
            "NOT_AVAILABLE_DESCRIPTION": "Prevent this version from being published until you mark it as available.",
            "START": "Start",
            "NOW": "Now",
            "CUSTOM": "Custom",
            "END": "End",
            "NO_END_DATE": "No end date"
        },
        "DELETE": {
            "DIALOG_HEADER": "Delete version",
            "DIALOG_TEXT": "Are you sure you want to delete \"Version {{versionIdentifier}}\"?",
            "REMOVE_ERROR": "There was an error deleting a new version"
        },
        "DUPLICATE": {
            "HEADER": "Duplicate version",
            "DUPLICATE_ERROR": "There was an error duplicating a new version",
            "NAME_PLACEHOLDER": "Enter version name"
        }
    },
    "PERSONALIZATION": {
        "NAV_LABEL": "Personalize",
        "DESCRIPTION": "To create a new page variant, click on <br/> “Create new”.",
        "NO_SEARCH_RESULTS": "No results match your search phrase.<br/> Try again.",
        "PAGE_VARIANTS": "Page variants",
        "PAGE_VARIANT_NAME": "Page variant name",
        "AUDIENCE_NAME": "Audience name",
        "CREATE_PAGE_VARIANT": "Create new page variant",
        "CREATE_VARIANT": "Create variant",
        "CREATE_AUDIENCE": "Create new audience",
        "DEFAULT_TEXT": "Start creating your page variant by giving it a name.",
        "EDIT_AUDIENCE": "Edit audience",
        "RENAME_PAGE_VARIANT": "Rename page variant",
        "AUDIENCE": "Audience",
        "NO_AUDIENCE": "No audience assigned",
        "NEW_PAGE_VARIANT": "New page variant",
        "FILTER_GROUP": "Group",
        "DEFAULT_VARIANT_DETAILS": "The default is shown to all users who do not match any other audience.",
        "CONTEXT_MENU": "Context menu",
        "DELETE": {
            "DIALOG_HEADER": "Delete page variant",
            "DIALOG_TEXT": "Are you sure you want to delete \"{{variantName}}\"?"
        },
        "SUGGEST_EDIT_PARENT_RENDERING": " You are editing a default item. Changes will apply on all page variants using this item. To change only the page variant, edit the properties of the component",
        "SELECT_COMPONENT": "Select component",
        "CONTENT_IS_SAME_AS_DEFAULT": "The content of the page variant is same as the default. To Personalize the page, edit the properties of a component",
        "ERROR_LENGTH_LIMIT": "The variant name exceeds the given limit",
        "EMPTY_VARIANT_NAME": "The variant name cannot be empty",
        "ERROR_CHARACTERS_VALIDATION": "Invalid characters. Characters allowed: A–Z, a–z, 0–9, _. Spaces are also allowed.",
        "API_ERRORS": {
            "SERVER_FAILURE_ERROR_MESSAGE": {
                "HEADLINE": "The list of personalization variants cannot be loaded.",
                "VARIANT_HEADLINE": "The list of variants cannot be loaded",
                "API_INACCESSIBLE": "The personalization provider cannot be reached.",
                "CONTACT_ADMIN": "If error reoccurs, contact your system administrator.",
                "REFRESH_PAGE": "Try refreshing the page."
            },
            "BAD_REQUEST_ERROR_MESSAGE": "The action cannot be completed. Please contact your system administrator.",
            "ARCHIVED_FLOW_DEFINITION_ERROR_MESSAGE": "The action cannot be completed. Please contact your system administrator.",
            "ERROR_VARIANT_NAME_EXISTS": "The variant name is already in use"
        },
        "GUIDE": {
            "HEADER": "About personalization",
            "ABOUT_VARIANT": "A page variant is based on the content from the original page. To personalize it, you have the following options:",
            "SELECT_COMPONENT": "Select a component in the canvas to start personalizing.",
            "ABOUT_FOOTER": "You can create up to eight variants of a page.",
            "STEPS": {
                "1": "Change the content item of a component",
                "2": "Switch a component with another compatible one",
                "3": "Hide component for the specific audience",
                "4": "Reset to the original default content"
            }
        },
        "STEPPER": {
            "CREATE_VARIANT": "Name your page variant",
            "CREATE_AUDIENCE": "Create your audience"
        },
        "NO_CDP_APP_URL": {
            "HEADER": "Personalize not configured",
            "DESCRIPTION": "Personalize has not been configured for your organization yet. Contact your XM Cloud administrator to resolve this issue."
        },
        "NO_POS_IDENTIFIER": {
            "HEADER": "No Site identifier",
            "DESCRIPTION": "Add one in XM Cloud Dashboard Settings to start personalizing pages.",
            "LINK_TEXT": "Go to Settings",
            "DASHBOARD_SETTINGS": "Go to Settings"
        }
    },
    "ANALYTICS": {
        "LHS_HEADER": "Analytics",
        "PAGE_ANALYTICS": {
            "TITLE": "Page insights",
            "COMING_SOON_TITLE": "Coming soon!",
            "COMING_SOON_TEXT": "With “Page insights” you will be able to compare personalized page variants.",
            "FIRST_VARIANT": "First variant",
            "SECOND_VARIANT": "Second variant",
            "VARIANT_IS_MISSING_DATA": "{{variantName}} has no data.",
            "TITLES": {
                "VISITORS": "Visitors",
                "AVG_PAGE_VIEWS": "Average Page Views per Session",
                "VIEWS": "Views",
                "TOP_PAGES": "Variant views"
            },
            "DESCRIPTIONS": {
                "VISITORS": "The count of individuals who have one or more visits to a page during the selected time period.",
                "AVG_TIME_ON_PAGE": "The average number of pages viewed by a visitor during one session.",
                "VIEWS": "Total number of views to the page in the time period. A view consists of all the pages viewed, and resources consumed, such as campaigns triggered and conversions achieved. Over time, a visitor can make many views to a page.",
                "TOP_PAGES": "The number of views for the top five variants of the page within the selected time frame.",
                "VISITS_TIMESERIES": "The count of visits that occurred on your page in the time period.",
                "BROWSER": "The browser types that were used to access your page.",
                "OPERATING_SYSTEM": "The top five operating systems that were used to access your page."
            }
        },
        "DURATION_FILTER": {
            "1H": "1 hour",
            "3H": "3 hours",
            "1D": "1 day",
            "7D": "7 days",
            "14D": "14 days",
            "30D": "30 days"
        },
        "TIME": "Time",
        "POINT_OF_SALE": "Point of sale",
        "DEFAULT_PAGE_VARIANT": "Default",
        "ADD_PAGE_VARIANT": "Add page variant",
        "NO_POS_IDENTIFIER": {
            "HEADER": "No Site identifier",
            "DESCRIPTION": "The site does not have an identifier. An identifier allows you to track data. You can manage identifiers from Settings in the XM Cloud Dashboard.",
            "DASHBOARD_SETTINGS": "Go to Settings"
        },
        "NO_CDP_APP_URL": {
            "HEADER": "Analytics not configured",
            "DESCRIPTION": "Analytics has not been configured for your organization yet. Contact your XM Cloud administrator to resolve this issue."
        },
        "SITE_ANALYTICS": {
            "TITLE": "Site insights",
            "TOTAL": "Total",
            "PERCENTAGE": "Percentage",
            "API_ERROR_MESSAGE": "There was an issue in getting data for some of the charts. Try again later, or contact your XM Cloud administrator if the issue persists.",
            "MISSING_DATA_MESSAGE": "There is no data available yet for some of the charts. Try again later.",
            "NO_DATA_MESSAGE": "You still haven't received any data from your website. Try to come back later. If the issue persists, try visiting our Knowledge Base for assistance.",
            "KNOWLEDGE_BASE": "Knowledge base",
            "NO_DATA_AVAILABLE": "No data available",
            "CHARTS": {
                "LINE_CHART": "Line chart",
                "COLUMN_CHART": "Column chart",
                "BAR_CHART": "Bar chart",
                "CHART_TYPE": "Chart type"
            },
            "TABLE": {
                "NAME": "Name",
                "PREVIOUS_PERIOD": "Previous period",
                "RECENT_PERIOD": "Recent period",
                "TREND": "Trend"
            },
            "TITLES": {
                "AVG_TIME_ON_SITE": "Avg. time on site",
                "BOUNCE_RATE": "Bounce rate",
                "BROWSER": "Browser",
                "FIRST_PAGE": "First page",
                "OPERATING_SYSTEM": "Operating system",
                "SOURCE": "Source",
                "TOP_COUNTRIES": "Top countries",
                "TOP_PAGES": "Top pages",
                "VISITS": "Visits",
                "VISITORS": "Visitors",
                "VISITS_BY_TIME_OF_DAY": "Visits by time of day"
            },
            "DESCRIPTIONS": {
                "AVG_TIME_ON_SITE": "The average amount of time in minutes:seconds spent on the site by visitors.",
                "BOUNCE_RATE": "The proportion of visits that only had a single page view.",
                "BROWSER": "The top five browser types that were used to access your site.",
                "FIRST_PAGE": "The name of the five top pages that were the first page of a visit.",
                "OPERATING_SYSTEM": "The top five operating systems that were used to access your site.",
                "SOURCE": "The count of visits by source, where the source is derived from referrer data.",
                "TOP_COUNTRIES": "The name of the top five countries from which a session originated.",
                "TOP_PAGES": "The name of the top five pages that were visited across visits during the time period.",
                "VISITS": "Total number of visits to the website in the time period. A visit consists of all the pages viewed, and resources consumed, such as campaigns triggered and conversions achieved. Over time, a visitor can make many visits to a website.",
                "VISITORS": "The count of individuals who have one or more visits to a website during the selected time period.",
                "VISITS_BY_TIME_OF_DAY": "The sum of visits for each hour and day of the week shown as a heatmap. The darker the color gradient, the higher the count. Hover over a square to see the data that that square represents.",
                "VISITORS_VISITS_TIMESERIES": "The count of visits or visitors that occurred on your website in the time period."
            }
        }
    },
    "PAGE_DESIGNS": {
        "LHS_PANEL": {
            "CONFIGURE": "Configure",
            "PAGE_TEMPLATES": "Page templates",
            "PAGE_DESIGNS": "Page designs",
            "PARTIAL_DESIGNS": "Partial designs",
            "PAGE_BRANCHES": "Page branches",
            "DESIGN": "Design",
            "FOLDERS": "Folders",
            "SELECTED_PARTIAL_DESIGNS": "Selected partial designs",
            "SELECTED_PARTIAL_DESIGNS_TOOLTIP": "If a placeholder contains more than one partial design, you can change their placement on the canvas by reordering the partial design blocks below.",
            "AVAILABLE_PARTIAL_DESIGNS": "Available partial designs",
            "AVAILABLE_PARTIAL_DESIGNS_TOOLTIP": "You can edit existing and create new partial designs from the partial desings section, accessible from the page types overview.",
            "AVAILABLE_PARTIAL_DESIGNS_DESCRIPTION": "Select the partial design you want to add to this page design.",
            "NO_AVAILABLE_PARTIAL_DESIGNS": "There are no available partial designs",
            "ASSEMBLE": "Assemble",
            "TEMPLATES": "Templates",
            "CREATE": "Create"
        },
        "WORKSPACE": {
            "PAGE_TEMPLATES_DESCRIPTION": "A template defines the content to be displayed on a page through a page design. Templates assembled here will be available in the Pages editor when creating a new page. Although it is possible to create pages from templates with no assigned page designs, it is recommended to assign a page design to your templates.",
            "PAGE_DESIGNS_DESCRIPTION": "Page designs are combinations of partial designs that determine the layout of a page type. Page designs created here will be available when creating a page type.",
            "PARTIAL_DESIGNS_DESCRIPTION": "Partial designs are reusable parts of a page design that are made up of components. Partial designs built here will be available when creating a page design.",
            "PAGE_BRANCHES_DESCRIPTION": "Create pre-filled pages from an existing page design",
            "CREATE_PAGE_TEMPLATE": "Create page template",
            "CREATE_TEMPLATE": "Create template",
            "CREATE_PARTIAL_DESIGN": "Create partial design",
            "CREATE_PAGE_DESIGN": "Create page design",
            "ASSIGN_PAGE_DESIGN": "Assign page design",
            "ASSIGN_PAGE_DESIGN_TEXT": "Select a page design for your page template. Page designs are combinations of partial designs that determine the layout of a page’s content.",
            "NO_PAGE_TEMPLATES": "You don’t have any page templates",
            "NO_PARTIAL_DESIGNS": "You don’t have any partial designs",
            "NO_PAGE_DESIGNS": "You don’t have any page designs",
            "NO_PAGE_BRANCHES": "There are no page branches",
            "TEMPLATES_NO_PAGE_DESIGNS": "There are no page designs",
            "TEMPLATES_CREATE_PAGE_DESIGN_GUIDE": "Create a page design to assign to your page template",
            "TEMPLATES_GO_TO_PAGE_DESIGN": "Go to Page designs",
            "SELECT_ITEM": "Select an item to view its details",
            "SELECT_PARTIAL_DESIGN": "Select a partial design from the list on the left",
            "PARTIAL_DESIGN": "Partial design",
            "PARTIAL_DESIGN_GUIDE": "Start creating partial designs to be reused in different page designs",
            "PAGE_DESIGN_GUIDE": "Make sure that you have existing page designs before creating a page design",
            "AT": "at",
            "NONE": "None",
            "PAGE_DESIGN": "Page design",
            "NAME": "Name",
            "SHARED_SITE": "Shared site",
            "CREATED": "Created",
            "MODIFIED": "Modified",
            "OVERVIEW": "Overview",
            "EMPTY_FOLDER": "This folder is empty",
            "BAD_REQUEST_ERROR_MESSAGE": "The action cannot be completed. Please contact your system administrator.",
            "TEMPLATES_USED_BY_PAGE": "Used by 1 page",
            "TEMPLATES_USED_BY_PAGES": "Used by {{count}} pages",
            "PAGE_DESIGN_USED_BY_TEMPLATE": "Used by 1 page template",
            "PAGE_DESIGN_USED_BY_TEMPLATES": "Used by {{count}} page templates",
            "MOVE": "Move",
            "MOVE_TO": "Move to",
            "MOVE_HERE": "Move here",
            "ADD": "Add",
            "CHANGE": "Change",
            "DESELECT": "Deselect",
            "DELETE_FOLDER_DIALOG_TEXT": "Delete this folder? Items inside this folder will also be deleted. This cannot be undone.",
            "DELETE_PARTIAL_DESIGN_DIALOG_TEXT": "Delete this partial design? This cannot be undone.",
            "DELETE_PAGE_DESIGN_DIALOG_TEXT": "Delete this page design? This cannot be undone.",
            "DELETE_PAGE_TEMPLATE_DIALOG_TEXT": "Delete this page template? This cannot be undone.",
            "SELECT_A_PAGE_TEMPLATE": "Select a page template",
            "NO_AVAILABLE_TEMPLATES": "There are no available page templates",
            "NO_INSERT_OPTIONS_ASSIGNED_TO_PAGE": "\"{{ itemName }}\" does not have any templates assigned as",
            "INSERT_OPTIONS": "insert options",
            "CURRENT_SITE": "Current site",
            "SHARED_SITES": "Shared sites",
            "SHARED_PARTIAL_DESIGNS_DESCRIPTION": "The folders and partial designs below are from shared sites that have been made available to be used in other sites. To create or edit shared folders and partial designs, open the shared site in Pages and create them under the Partial designs section.",
            "SHARED_PAGE_DESIGNS_DESCRIPTION": "The folders and page designs below are from shared sites that have been made available to be used in other sites. To create or edit shared folders and page designs, open the shared site in Pages and create them under the Page designs section.",
            "SHARED_PARTIAL_DESIGNS_DISABLE_DESCRIPTION": "To create folders and partial designs in a shared site, open the shared site in Pages and create them under the Partial designs section",
            "SHARED_PAGE_DESIGNS_DISABLE_DESCRIPTION": "To create folders and page designs in a shared site, open the shared site in Pages and create them under the page designs section",
            "EDITING_NOT_SUPPORTED_DESCRIPTION": "To create folders and page designs, you need to upgrade to the latest version of XM Cloud. Please contact your system administrator.",
            "FEATURE_NOT_AVAILABLE_DIALOG": {
                "HEADER": "Feature not available",
                "TEXT_1": "and",
                "TEXT_2": "are only available for",
                "TEXT_3": "To use features like this and more, start",
                "SXA_SITES_DOCUMENTATION_LINK": "headless SXA sites",
                "CREATE_SXA_SITES_LINK": "creating headless SXA sites",
                "DISMISS": "Dismiss"
            },
            "MANAGE_PAGE_DESIGN_DIALOG": {
                "SUBTITLE": "Manage the page design of this particular page",
                "DESCRIPTION": "The page design My Page Design used by this Page inherits from the page data template My template",
                "HELPER_TEXT": "This page design is assigned only to this page. Changes the page design will only affect this page.",
                "OVERRIDE": "Override for this page only",
                "DISMISS": "Dismiss",
                "CHOOSE": "Choose",
                "INFO": "With this option the page will no longer inherit it’s Page Design from it’s template. The design will apply itself to this page only. If you change the Page Design on the master Template, this Page will not be affected.",
                "CONFIRM_SAVE": {
                    "TITLE": "Please confirm change",
                    "DESCRIPTION": "This change is likely to have consequences for layout and content. Please review your changes after confirming",
                    "CONTINUE_WITH_SAVE": "Continue with save"
                }
            }
        }
    },
    "LHS": {
        "TAB_GROUP_LABEL": "Left panel tabs"
    },
    "RHS": {
        "TAB_GROUP_LABEL": "Right panel tab",
        "CONTENT_LABEL": "Content",
        "COMPONENT_OPTIONS": "Component options",
        "ELEMENT_OPTIONS": "Element options",
        "ELEMENT_NO_OPTION_TEXT": "There are no options for this element",
        "SUPER_LAYOUT": {
            "LAYOUT": "Layout",
            "ALIGNMENT": "Alignment",
            "WRAP": "Wrap",
            "DISTRIBUTE": "Distribute",
            "HORIZONTAL": "Horizontal",
            "VERTICAL": "Vertical",
            "TOP": "top",
            "CENTER": "center",
            "BOTTOM": "bottom",
            "LEFT": "left",
            "RIGHT": "right",
            "TOP_LEFT": "Top left",
            "TOP_CENTER": "Top center",
            "TOP_RIGHT": "Top right",
            "CENTER_LEFT": "Center left",
            "CENTER_CENTER": "Center center",
            "CENTER_RIGHT": "Center right",
            "BOTTOM_LEFT": "Bottom left",
            "BOTTOM_CENTER": "Bottom center",
            "BOTTOM_RIGHT": "Bottom right",
            "GAP": "Gap",
            "PADDING": "Padding",
            "WIDTH": "Width",
            "COLUMNS": "Columns",
            "SETTINGS": "Settings",
            "SHOW_MORE": "Show more",
            "SHOW_LESS": "Show less",
            "COLUMN_N": "Column {{index}}",
            "CONTAINER": "Container"
        }
    },
    "INVENTORY": {
        "TOGGLE_DISCONNECTED_MODE": "Toggle inventory disconnected mode"
    },
    "CANVAS_LOADING": {
        "PANEL_LABEL": "Canvas loading mode",
        "MODE_FULL": "Always reload",
        "MODE_NOT_RELOAD": "Not reload",
        "MODE_PAGE_CHANGE": "On page change only",
        "RELOAD": "Reload canvas",
        "SHOW_PANES": "Force showing panes",
        "TOGGLE_DISCONNECTED_MODE": "Toggle Personalization disconnected mode",
        "TOGGLE_SITE_SWITCHER_MODE": "Toggle Site switcher Dev mode",
        "TOGGLE_CANVAS_THROUGH_HORIZON_MODE": "Toggle canvas through Horizon Iframe"
    },
    "CANVAS_TRANSLATIONS": {
        "NO_TEXT_IN_FIELD": "[No text in field]",
        "PLACEHOLDER_EMPTY": "{{placeholderName}} (empty)",
        "RENDERING_ERROR": "The component cannot be dropped into this placeholder",
        "RENDERING_IS_HIDDEN": "The component is hidden",
        "RENDERING_IS_PERSONALIZED": "{{renderingName}} is personalized",
        "RENDERING_IS_NOT_PERSONALIZED": "{{renderingName}} is not personalized",
        "SELECT_PARENT": "Select parent element",
        "SELECT_CONTENT_ITEM": "Select content item",
        "MOVE_UP": "Move up",
        "MOVE_DOWN": "Move down",
        "DELETE": "Delete",
        "EDITOR_OPEN_LINK_NEW_TAB": "Open in a new tab",
        "OPEN_IN_EXPLORER": "Open in Explorer"
    },
    "DAM": {
        "DOWNLOAD_LABEL": "Download",
        "CANNOT_LOAD_IFRAME_TEXT": "The DAM provider cannot be shown. Try refreshing the page. If the error reoccurs, contact your system administrator."
    },
    "PANEL_TABS": {
        "LEFT_PANEL": "Left panel tabs"
    },
    "VALIDATION": {
        "VALIDATE_NAME": {
            "LENGTH_LIMIT": "Name exceeds the given limit",
            "EMPTY": "Name cannot be empty",
            "NOT_ALLOWED_CHARACTER": "Invalid characters. Characters allowed: A–Z, a–z, 0–9, _. Spaces are also allowed.",
            "ALREADY_USED": "Name is already in use"
        }
    }
}
```

