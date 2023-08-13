import React from 'react'
import Helmet from 'react-helmet'

function AlgoliaDocSearch() {
  return (
    <Helmet>
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@docsearch/css@3" />
      <script src="https://cdn.jsdelivr.net/npm/@docsearch/js@3"></script>
      <script type="text/javascript">
        {`
        docsearch(
          appId: 'ULMMB4U4HW',
          apiKey: '4de30d1138cc009d6a8b1adeb846622e',
          indexName: 'sergevandenoever',
          container: 'algolia_docSearch'
          debug: false // Set debug to true if you want to inspect the modal
        });
        `}
      </script>
    </Helmet>
  )
}

AlgoliaDocSearch.defaultProps = {
}

AlgoliaDocSearch.propTypes = {
}

export default AlgoliaDocSearch
