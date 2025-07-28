<?php

declare(strict_types=1);

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Attribute\Route;

class PageController extends AbstractController
{
    #[Route(path: '/{id}', name: 'app_page_index')]
    public function index(string $id): Response
    {
        return $this->render(sprintf('page/_%s.html.twig', $id));
    }

    #[Route(path: '/lineup/{slug}', name: 'app_block_detail')]
    public function detail(string $slug): Response
    {
        return $this->render('page/festival/lineup.html.twig', [
            'id' => explode('-', $slug)[0],
            'slug' => $slug
        ]);
    }
}
