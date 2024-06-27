import React from 'react'

export default function Switch({ status }) {
  return (
    <div class="form-check form-switch">
      <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" disabled={status} />
      <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
    </div>
  )
}
