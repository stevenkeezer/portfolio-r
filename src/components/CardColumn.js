import React from "react";
import { Card } from "react-bootstrap";

export default function CardColumn() {
  return (
    <div class="container d-flex justify-content-center">
      <div class="row mx-auto">
        <div class="col-md-6">
          <div class="card">
            <div class="card-block">
              <img src="https://picsum.photos/580/651"></img>
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Left 1</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-block">
              <img src="https://picsum.photos/580/652"></img>
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Left 2</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card ml-5">
            <div class="card-block p">
              <img src="https://picsum.photos/580/350"></img>
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Right 1</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
          <div class="card ml-5">
            <div class="card-block">
              <img src="https://picsum.photos/580/652"></img>
              <h1 class="card-text good-review-score float-left">8.0</h1>
              <h4 class="card-title">Card on the Right 1</h4>
              <p class="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
            </div>
            <div class="card-footer">
              <p class="card-text text-right">
                Footer Text - Possible Link Out
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
