import React, { Fragment } from 'react'

export const HeroCardModal = ({characters, show=false}) => {

  return (
    <Fragment>
        {
            show && (

                <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden={show}>
                <div className="modal-dialog modal-sm">
                  <div className="modal-content">
                    {characters}
                  </div>
                </div>
              </div>
            )
        }
    </Fragment>
  )
}
