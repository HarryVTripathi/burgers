### Planning a react app:

 - Component Tree/Component structure:

Split the design in to app components.

 - Application state:

Plan the state. Manage the state in the component where change in it affects.

 - Components v/s containers.

Which components should be stateless - which ones should be functional and don't use hooks or class components which do not use state and which ones should be stateful.

## Good Practices:

 - And again this is a good way of structuring your project because as you might imagine, in bigger projects, in very big projects, it can get hard to manage all these components since it is a good practice in react to create granular components and not big chunks. Now if you have a lot of components, you have a lot of files and to keep these files manageable, you want to create a folder structure which is not only divided in components and containers but where inside the components and containers, you also divide it up by feature area so that you quickly know okay if I need to work on the burger side, I have to go into the burger folder.

### Do we have any state or prop changes which trigger a re-rendering?

Only if the modal is visible, re-rendering of the elements inside makes sense.


### Multipage react application.

Single page application => Strong decoupling between front-end, back-end and React app.

If the React app sends a request to the server, we should not expect to get back a new HTML page. We typically expect some JSON data.